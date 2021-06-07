<template>
<div class="footerContainer">
    <div class="footerContent">
        <div class="infoArea">
            <div class="rowOne">
                <span class="brandHeader">Shop</span>
                <p class="infoText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nobis molestiae quisquam labore deleniti perferendis rem.</p>
                <span class="phoneText">Phone : +90 000 000 0000</span> <br>
                <span>help@shop.com</span><br>
                <img class="imgInstagram" src="https://www.transparentpng.com/thumb/logo-instagram/JFyofc-logo-instagram-background-png.png" alt="logo Instagram background png @transparentpng.com">
                <img class="imgInstagram" src="https://www.transparentpng.com/thumb/logo-instagram/JFyofc-logo-instagram-background-png.png" alt="logo Instagram background png @transparentpng.com">
                <img class="imgInstagram" src="https://www.transparentpng.com/thumb/logo-instagram/JFyofc-logo-instagram-background-png.png" alt="logo Instagram background png @transparentpng.com">
            </div>
            <div class="rowTwo">
                <h3>Usefull Links</h3>
                <ul>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>
            </div>
            <div class="rowThree">
                <h3>Help</h3>
                <div>
                    <h3>Payment</h3>
                </div>
            </div>
        </div>
        <div class="bottomArea">
            <div>
                <span class="bottomAreaText">Terms and Conditions</span>
                <span class="bottomAreaText">Privacy Policy</span>
            </div>
            <span class="copyrightText">©2021 All Right Reserved</span>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    left: 0;
    bottom: 0;
    background: #333C35;
    height: auto;
    color: white;
}
.footerContent {
    width: 80%;
}
.infoArea {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80%;
}
.rowOne {
    width: 30%;
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
}
.brandHeader {
    font-size: 22px;
    font-weight: 700;
}
.imgInstagram {
    width: 60px;
    height: 60px;
}
.rowTwo {
    width: 40%;
    padding: 20px;
}
.rowThree {
    width: 30px;
    padding: 20px;
}
.bottomArea {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.bottomAreaText {
    padding: 30px;
}
.copyrightText {
    margin-top: 15px;
}
</style>