const config: {[key: string]: number} = {
    kafka: 0
}

config.two = 4


config.two = config.two || 5
config.three = config.three || 5

console.log({config})
