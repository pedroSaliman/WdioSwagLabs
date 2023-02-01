class Cart{

private get AddtoCart(){return $("#add-to-cart-sauce-labs-backpack")}
private get carCart(){return $(".shopping_cart_link")}
private get check(){return $("#checkout")}
private get  fname(){return $("#first-name")}
private get lname(){return $("#last-name")}
private get zib(){return $("#postal-code")}
private get submi(){return $("#continue")}
private get finish(){return $("#finish")}
public  get message(){return $(".complete-header")}
async cart(firstname,lastname,code){
    await this.AddtoCart.click()
    await this.carCart.click()
    await this.check.click()
    await this.fname.setValue(firstname)
    await this.lname.setValue(lastname)
    await this.zib.setValue(code)
    await this.submi.click()
    await this.finish.click()
}



}
export default new Cart()
