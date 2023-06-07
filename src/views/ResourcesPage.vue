<template>
    <div class="resource-container">
        <router-link class="resources-button" to="/configurator">
            <h1>Kosten berechnen</h1>
            <p>
                Berechne die Kosten für deine Anwendung in nur wenigen Schritten
            </p>
            <div class="navigation-button">Ich will mehr erfahren</div>
        </router-link>
        <router-link class="resources-button" to="/blog">Gehe zu unseren Blog</router-link>
    </div>
</template>
<script>


export default {
    name: "ResourcesPage"
}
</script>
<style scoped>
.resource-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 94vh;
}

.resources-button {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: whitesmoke;
    height: 90%;
    width: 90%;
    text-align: center;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
}

.resources-button:hover {
    background-color: #ff8c00;
    transition: 1s;
}
</style>