export default function getFileList(event) {
    let filedInfo = []

    console.log(event)

    for (let i = 0; i < event.target.files.length; i++) {
        filedInfo.push({
            id: i,
            name: event.target.files[i].name
        })
    }

    return filedInfo
}