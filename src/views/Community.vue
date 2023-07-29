<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Navbar,
        Footer
    }
}
</script>

<template>
    <Navbar theme="dark" />
    <main class="bg-jule-darkest text-white pb-20">
        <div class="sm:px-24 max-sm:px-10">
            <h1 class="text-4xl font-bold text-center mb-10">Community</h1>
            <br><br>
            <div class="flex justify-center max-lg:flex-wrap gap-16 select-none">
                <a href="https://github.com/julelang/jule/issues/new/choose" target="_blank" class="card text-center">
                    <font-awesome-icon class="text-8xl mb-20" icon="fa-brands fa-github" />
                    <p class="font-bold text-xl">GitHub</p>
                </a>
                <a href="https://discord.gg/CZhK7dyh9X" target="_blank" class="card text-center">
                    <font-awesome-icon class="text-8xl mb-20" icon="fa-brands fa-discord" />
                    <p class="font-bold text-xl">Discord</p>
                </a>
            </div>
        </div>
    </main>
    <Footer />
</template>