var imgs = document.getElementsByTagName('img');

for(var i = 0 ; i < imgs.length ; i ++ )
{
    var img = imgs[i]
    img.setAttribute('data-src', img.src.split('?')[0] + '?x-oss-process=style/normal')
    img.classList.add('lazyload')
}