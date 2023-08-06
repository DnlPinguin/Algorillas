<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="column ">
                <h3>About us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae.</p>
            </div>

            <div class="column">
                <h5>Was wir bieten</h5>
                <ul>
                    <li><a href="#">App Entwicklung</a></li>
                    <li><a href="#">Web Enwticklung</a></li>
                    <li><a href="#">App Design</a></li>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Entwickler mieten</a></li>
                </ul>
            </div>

            <div class="column">
                <h5>Informationen</h5>
                <ul>
                    <li><a href="#">Ablauf</a></li>
                    <li><a href="#">Kosten</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div class="column">
                <h5>Kontakt</h5>
                <ul>
                    <li><a href="tel:+4917641864586">+49 176 418 64 586</a></li>
                    <li><a href="mailto:info@example.com">Email: info@example.com</a></li>
                </ul>
            </div>
        </div>
        <span class="copyright">© 2023 <b>ALGORILLAS</b>. All rights reserved.</span>
    </footer>
</template>
  
<script>
export default {
    name: 'FooterSection',
}
</script>
  
<style scoped>
.footer {
    background: #f8f9fa;
    color: black;
    padding: 20px 0;
    width: 100%;
    text-align: center;
}

.footer-container {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
}

.column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.column ul {
    list-style: none;
    padding: 0;
}

.column li {
    margin-bottom: .5rem;
}

.column h5 {
    margin-bottom: 1rem;
}

.column a {
    color: black;
    text-decoration: none;
}

.column p {
    color: black;
}

.copyright {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: block;
    text-align: center;
    width: 100%;

}
</style>
  