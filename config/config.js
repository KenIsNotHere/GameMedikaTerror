let versionData = ()=>{
    let MajorVersion = 1
    let MinorVersion = 6
    let ComplementaryVersion = "Alpha"
    let Version = `${MajorVersion}.${MinorVersion}v (${ComplementaryVersion})`
        return Version
}

export default versionData()