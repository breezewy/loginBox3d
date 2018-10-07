
      function $(selector){
          return document.querySelector(selector);
      }
      function $$(selector){
          return document.querySelectorAll(selector);
      }
      
    // //   点击登录注册切换
    //  $$('.modal .login').forEach(function(node){
    //      node.onclick = function(){
    //          $('.filp-modal').classList.remove('register');
    //          $('.filp-modal').classList.add('login');
    //      }
    //  })
    //  $$('.modal .register').forEach(function (node) {
    //         node.onclick = function () {
    //             $('.filp-modal').classList.remove('login');
    //             $('.filp-modal').classList.add('register');
    //         }
    //     })


    // 点击用户按钮显示登录注册框
     $('.user-circle').onclick = function (e) {
            e.stopPropagation();
            $('.filp-modal').style.display="block";
     }


    // //  点击叉号，关闭窗口
    // $$('.close').forEach(function (node) {
    //     node.onclick = function(){
    //         $('.filp-modal').style.display = "none"; 
    //     }
    // })

    $('.filp-modal').addEventListener('click',function(e){
        e.stopPropagation();
        if(e.target.classList.contains('login')){
            $('.filp-modal').classList.remove('register');
            $('.filp-modal').classList.add('login');
        }
        if(e.target.classList.contains('register')){
            $('.filp-modal').classList.remove('login');
            $('.filp-modal').classList.add('register');
        }
        if(e.target.classList.contains('close')){
            $('.filp-modal').style.display = "none"; 
        }
    })

    document.addEventListener('click',function(){
        $('.filp-modal').style.display = 'none';
    })

    $('.modal-login form').addEventListener('submit',function(e){
        e.preventDefault();
        if(!/^\w{3,8}$/.test($('.modal-login input[name=username]').value)){
            $('.modal-login .errorMes').innerText = '用户名需要输入3-8个字符，包括字母数字下线';
            return false;
        }
        if(!/^\w{6,10}$/.test($('.modal-login input[name=password]').value)){
            $('.modal-login .errorMes').innerText = '密码需要输入6-10个字符，包括字母数字下划线';
            return false;
        }
        this.submit();
    })
    $('.modal-register form').addEventListener('submit', function (e) {
            e.preventDefault();
            if (!/^\w{3,8}$/.test($('.modal-register input[name=username]').value)) {
                $('.modal-register .errorMes').innerText = '用户名需要输入3-8个字符，包括字母数字下线';
                return false;
            }
            if(/^weiyang$|^haha$/.test($('.modal-register input[name=username]').value)){
                $('.modal-register .errorMes').innerText = '用户名已存在';
                return false;
            }
            if (!/^\w{6,10}$/.test($('.modal-register input[name=password]').value)) {
                $('.modal-register .errorMes').innerText = '密码需要输入6-10个字符，包括字母数字下划线';
                return false;
            }
            if($('.modal-register input[name=password]').value!==$('.modal-register input[name=password2]').value){
                $('.modal-register .errorMes').innerText = '两次输入的密码不一样';
                return false;
            }
            this.submit();
        })


    