const printFolds = (folds: boolean[]): void => {
    let foldsString: string = ""
    for (const fold of folds) {
        foldsString = `${foldsString} ${fold ? "M" : "V"}`
    }
    console.log(`folds (length = ${folds.length})`)
    console.log(foldsString)
}

const pureRecursion = (n: number, fold: boolean = false): boolean[] => {
    if (n <= 0) return []
    return [...pureRecursion(n - 1, false), fold, ...pureRecursion(n - 1, true)]
}

const singleRecursion = (n: number): boolean[] => {
    if (n <= 0) return []
    const prev = singleRecursion(n - 1)
    const negRev = [...prev].reverse().map(fold => !fold)
    return [...prev, false, ...negRev]
}

const iterative = (n: number): boolean[] => {
    let folds: boolean[] = []
    for (let i = 0; i < n; i++) {
        const negRev = [...folds].reverse().map(fold => !fold)
        folds = [...folds, false, ...negRev]
    }
    return folds
}

for (let i = 0; i < 5; i++) {
    printFolds(pureRecursion(i))
    printFolds(singleRecursion(i))
    printFolds(iterative(i))
}
