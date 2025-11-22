let versionData = ()=>{
    let MajorVersion = 1
    let MinorVersion = 2
    let ComplementaryVersion = "Pre-Alpha"
    let Version = `${MajorVersion}.${MinorVersion}v (${ComplementaryVersion})`
        return Version
}

export default versionData()