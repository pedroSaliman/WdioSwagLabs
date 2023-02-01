class Log{

    private get username(){return $("#user-name")}
    private get pass(){return $("#password")}
    private get Loginbutton(){return $("//input[@id='login-button']")}
      


   async log(theusername,password){
 await   this.username.setValue(theusername)
 await   this.pass.setValue(password)
 await   this.Loginbutton.click()

}
 
public open () {
    browser.url("https://www.saucedemo.com/")
    return browser.maximizeWindow()
}
}


export default new Log()





