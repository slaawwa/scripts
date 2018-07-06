((onload, src = '//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js') => {
    let script = document.createElement("script"),
        node = document.getElementsByTagName('head')[0];
    script.type="text/javascript";
    if (onload) {
        script.onload = () => {
            onload('._2PewcwJ3W8mc7qKUwREIHe', '._3K3dipl65wOMpaMU-KVKf0')
        }
    }
    script.src=src;
    node.appendChild(script);
})((wrapSelector, blockSelector) => {

    let ctx = $('[id="/embed/colors-game"]').prop('contentWindow').document;

    let $wrap = $(wrapSelector, ctx);

    $wrap.delegate(blockSelector, {
        click() {
            console.log('DONE')
            setTimeout(() => {
                let sq = {}
                $wrap.find(blockSelector).each(function() {
                    let bc = $(this).css('background-color')
                    if (!sq[bc]) {
                        sq[bc] = $()
                    }
                    sq[bc] = sq[bc].add(this)
                    console.log('bc:', bc)
                })
                let sortKey = Object.keys(sq).sort((x, y) => {
                  // console.log('x:', x, obj[x].length)
                  // console.log('y:', y, obj[y].length)
                  return sq[x].length > sq[y].length
                })
                sq[sortKey[0]].css('outline', '1px solid white')
                setTimeout(() => {
                    sq[sortKey[0]].css('outline', 'innitial')
                }, 500)
            }, 250)
        }
    })

})