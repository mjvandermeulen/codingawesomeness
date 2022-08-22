import {
    createClient as createManagementClient,
    Entry,
    Environment,
} from "contentful-management";
import { config } from "./config";
import { aAndNotB, arraysIntersection,writeAssetIDsArrayToFile } from "./utils";

// intersection: 37qQrpRpKXr5PYkPcn3vC2 asset id.
function knowledgeOnlyAssets(entries: Entry[]): string[] {
    const assets = {
        knowledgeAssets: [] as string[],
        otherAssets: [] as string[],
    };

    entries.forEach((entry) => {
        if (entry.sys.contentType.sys.id == "5fMmpZEMY84iq4GKUUgwwu") {
            if (entry.fields?.document?.["en-US"]?.sys?.id) {
                assets.knowledgeAssets.push(
                    entry.fields?.document?.["en-US"]?.sys?.id
                );
            }
        } else {
            // LEARN: for (const [fieldKey, fieldName] of Object.entries(entry.fields)) {
            for (const fieldName of Object.values(entry.fields)) {
                if (fieldName?.["en-US"]?.sys?.linkType === "Asset") {
                    assets.otherAssets.push(fieldName?.["en-US"]?.sys?.id);
                }
            }
        }
    }, assets);

    console.log(
        `Number of assets that are both in Knowledge Contenttype and elsewhere: ${
            arraysIntersection(assets.knowledgeAssets, assets.otherAssets)
                .length
        }`
    );
    return aAndNotB(assets.knowledgeAssets, assets.otherAssets);
}

const unlinked_document_assets = async (
    entries: Entry[],
    assets: string[]
): Promise<Boolean> => {
    entries.forEach((entry) => {
        if (
            entry?.sys?.contentType?.sys?.id == "5fMmpZEMY84iq4GKUUgwwu" &&
            assets.includes(entry.fields?.document?.["en-US"]?.sys?.id)
        ) {
            // entry.fields.document = {}
            delete entry.fields.document;
            entry.update();
            entry.publish(); // TODO!!!!!: ASk jon
            console.log(
                `Removed the document in knowledge entry: ${entry.fields.title["en-US"]}`
            );
        }
    });
    return true;
};
const delete_assets = async (environment: Environment, assets: string[]):  Promise<Boolean> => {
        assets.forEach(async (assetID) => {
            const asset = await environment.getAsset(assetID)
            // asset.delete()
            console.log(`Pretend deleting asset ${assetID}. only pretending for testing purposes`)
        });
        return true;
    };

const run = async (): Promise<void> => {
    try {
        const managementClient = createManagementClient({
            // management API SPECIFIC key.
            accessToken: config.accessToken,
        });
        const space = await managementClient.getSpace(config.spaceID);
        const environment = await space.getEnvironment(config.environment);
        // MANAGEMENT CLIENT NOW READY


        // Reading Entries
        const allEntries = (await environment.getEntries({ limit: 1000 }))
            .items;
        console.log(
            `Number of entries found to feed the knowledgeOnlyAssets ${allEntries.length}`
        );

        // Finding assets that are only on Knowledge
        const assetsOnlyOnKnowledge = knowledgeOnlyAssets(allEntries);

        console.log(
            `Number of knowledge assets that are ONLY found on knowledge entries: ${
                (await assetsOnlyOnKnowledge).length
            }`
        );
        console.log(`Assets ONLY found on knowledge entries: `);
        console.log(assetsOnlyOnKnowledge);

        // writing found assets to a file
        writeAssetIDsArrayToFile(assetsOnlyOnKnowledge, 'AssetsOnlyOnKnowledge')

        // reading knowledge Entries
        const knowledgeEntries = (
            await environment.getEntries({
                content_type: "5fMmpZEMY84iq4GKUUgwwu",
            })
        ).items;

        console.log(
            `Number of knowledge entries loaded ${knowledgeEntries.length}`
        );
        // unlinked_document_assets(knowledgeEntries, assetsOnlyOnKnowledge);
        unlinked_document_assets(knowledgeEntries, []); // testing only!!!!TODO!!!!!


        delete_assets(environment, assetsOnlyOnKnowledge);

    } catch (e) {
        console.log(`Error in "run". Error: ${e}`);
    }
};

run();
