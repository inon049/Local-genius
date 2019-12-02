

async function uploadImg(file) {
    const CLOUD_NAME = 'dn7ikdvam'
    const PRESET_NAME = 'fjlfgfyp'
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

    const formData = new FormData();
    formData.append('file', file)
    formData.append('upload_preset', PRESET_NAME);

    return fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(res => {
            console.log(res.url)
            return res
        })
        .catch(err => console.error(err))
}


export const cloudinary = {
    uploadImg

} 