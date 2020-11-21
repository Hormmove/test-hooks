 // 在往远程仓库提交代码的时候，先git pull，然后在git push(防止有其他同志在你之前往仓库提交了代码，避免代码冲突)
    // git pull origin master
    // git push

    // 如果你跟其他同事修改的是同一个文件，那在git pull的时候就会产生冲突，接下来你就应该在你的本地去解决冲突(这时候最好把你的同事叫过来，你们一起商量着解决，看看到底要谁的代码)

    //-------------------------------------------
    // git的多分支管理

    // master分支上永远存放的是最新的，最纯净的代码，就是线上跑着的代码，开发人员写代码不会再master上开发

    // 一般都会新创建一个分支dev，在dev分支上去编写代码

    // 检查分支的情况 git branch 查看当前存在的分支   *代表当前打开的分支
    // 新增分支： git branch 分支名    git branch dev 创建一个叫dev的分支
    // 切换分支  git checkout 分支名 
    // git checkout -b 分支名 创建新分支，并且切换到新的分支下

    // git merge 分支名  把某一个分支的代码合并到当前分支下

    


    // 过了几天，pm有分配了一个需求，这时候咱们想要在一个新的分支上去开发，
    // git checkout -b 分支名

    // 不管你使用哪个分支去开发新的需求，都得先merge master上的代码，以保证你当前分支上的代码和master保持同步(以防万一)

     // 当dev上的需求开发完成之后，没有毛病了，而且在线上跑着也没问题，那这时候一定要把dev的代码合并到master上，以保证master是最新最干净的代码
### fetch

    fetch： 他是结合promise的一个请求api的新的方法,是原生的,他返回值是一个promise实例
     */
    //  console.log(fetch);

    // console.log(fetch('index.json'));

    fetch('index.json', {
      body: '', // 如果是post请求才能使用，这是通过请求体把内容传递给服务端(如果是get请求不要写这个参数)



      // same-origin 是只允许同源下才可以携带
      // *omit： 不允许携带凭证
      // include ：允许跨域吓呆资源凭证
      credentials: 'include', // 是否允许携带资源凭证
      headers: { // 设置请求头
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      },
      method: 'get', // 设置请求方式
    }).then(res => {
      // promise成功的回调函数不管当前fetch请求成功还是失败，都会走
      // 想拿到数据，要写两个then才好使


      return res.json();
      console.log(res);
    }).then(res => {
      console.log(res);
    })