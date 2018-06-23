var imgs = document.getElementsByTagName('img');

for(var i = 0 ; i < imgs.length ; i ++ )
{
    var img = imgs[i]
    img.setAttribute('data-src', img.src + '?x-oss-process=style/normal')
    img.src += '?x-oss-process=style/small'
    img.classList.add('lazyload')
}