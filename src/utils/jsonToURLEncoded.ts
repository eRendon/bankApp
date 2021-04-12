const jsonToURLEncoded = (jsonString: any) => {
    return Object.keys(jsonString)
        .map(function (key) {
            return (
                encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key])
            )
        })
        .join('&')
}

export default jsonToURLEncoded
