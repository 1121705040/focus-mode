
window.onload = function() {
            //判断是视频课程还是ppt课程
            if (window.frames[0] && window.frames[0].window.frames[0]){
                let flag = false
                //视频课程
                //将速度调整至n倍
                    setTimeout(f => {
                        let doc = window.frames[0].window.frames[0].document
                        doc.querySelector('video').playbackRate = 16
                        doc.querySelector('video').play();
                    }, 8000)
                    let paly = 0
                    setInterval(f => {

                        let doc = window.frames[0].window.frames[0].document
                        doc.querySelector('video')
                        var elevideo = doc.querySelector('video')
                        //判断是否完成学习

                        elevideo.addEventListener('playing', function () {//播放中console.log("播放中");
                            paly++

                        });

                        elevideo.addEventListener('ended', function () { //结束
                            flag = true

                        }, false);
                        if (flag) {
                            document.getElementsByClassName('btn btn-transparent btn-learn js-btn-learn active')[0].click()
                            document.getElementsByClassName('btn btn-primary')[0].click()
                        }

                        setTimeout(f=>{

                            if (paly < 2 ) {
                                location.reload();
                            }
                        },20000)

                    }, 8000)
            } else if (window.frames[0].document.getElementsByClassName('goto-last')[0]){

                //点击翻到尾页
                let doc = window.frames[0].document.getElementsByClassName('goto-last')[0]
                doc.click()

                setInterval(f=>{
                    //判断是否完成学习
                    if (document.getElementsByClassName('btn text-sm js-learned-prompt color-primary moveup')[0])
                    {
                        //点击下一节
                        document.getElementsByClassName('btn btn-transparent btn-learn js-btn-learn active')[0].click()
                        document.getElementsByClassName('btn btn-primary')[0].click()
                    }else {

                    }
                },8000);
            }
};

