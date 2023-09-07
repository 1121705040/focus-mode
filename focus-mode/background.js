chrome.action.onClicked.addListener(async (tab) => {
      // Insert the CSS file when the user turns the extension on
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: exScript,
      }).then(() => console.log("injected a function"));
});


function exScript(){
    let localStorage = window.localStorage;
    let number = /^\d+$/.test(localStorage.getItem("number")) ? localStorage.getItem("number") : 193;
    let nal =  document.getElementById('ueditor_0').contentWindow.document.getElementsByTagName('body')
    let p = document.createElement("p");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    number++;
    // let title = nal[0].children[3].innerText
    // document.getElementById('title').value= title.slice(2)
    //

    p1.innerText = '### 这是作者的第'+number+'篇原创文章';
    p.innerHTML = '<img data-s="300,640" data-galleryid data-type="jpeg" class="rich_pages wxw-img" src="https://mmbiz.qpic.cn/mmbiz_jpg/Ghr2grnoRbXiaKicp3gc2pDUVYfV0icBic9yIGZibPcrUsIk78ib9Y4ueBnCqKPkSUR0ibolOnfQWZxhzLAbwvXUIJB2A/0?wx_fmt=jpeg" style data-ratio="0.2109375" data-w="512" data-imgqrcoded="1">';
    p2.innerHTML = '<img data-s="300,640" data-galleryid data-type="jpeg" class="rich_pages wxw-img" src="https://mmbiz.qpic.cn/sz_mmbiz_jpg/Ghr2grnoRbUjw8vbwvAkguGQl2mo5e5rvdSLpw4ABClWkdwZ5CPCvlVLQRE6Cge0hCOJIIErTZJPec6icVSxSTA/0?wx_fmt=jpeg" style data-ratio="0.2109375" data-w="512" data-imgqrcoded="1">';
    p3.innerText = '\n' +
        '\n' +
        '> *声明：\n' +
        '> 本文为作者原创；\n' +
        '> 对文章有任何疑问都可以直接和作者交流；\n' +
        '> 欢迎分享和收藏本文；\n' +
        '> 转载请保留作者及出处；\n' +
        '> 谢谢您的合作与支持！*\n' +
        '\n';
    document.getElementById('author').value='怪咖学生'
    localStorage.setItem("number",number);
    nal[0].appendChild(p)
    nal[0].appendChild(p1)
    nal[0].appendChild(p2)
    nal[0].appendChild(p3)

}






