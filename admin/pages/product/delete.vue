<template>
    <div>
        <b-card bg-variant="light">
            <b-form-group
            label-cols-lg="3"
            label="Product Delete"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
            >
            <b-form-group
                label="Product ID:"
                label-for="title"
                label-cols-sm="3"
                label-align-sm="right"
            >
                <b-form-input v-model="productId" id="title"></b-form-input>
                <b-button variant="dark" class="mt-5" block @click="deleteProduct">Delete</b-button>
            </b-form-group>
            
            </b-form-group>
        </b-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            productId: null,
        }
    },
    methods: {
        async deleteProduct() {
            let result = await this.$axios.$delete(`http://localhost:8080/api/product/${this.productId}`);
            console.log(result)
        }
    }
}
</script>

<style>

</style>