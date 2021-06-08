<template>
<div>
    <div>
        <b-card bg-variant="light">
            <b-form-group
            label-cols-lg="3"
            label="Product Get"
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
                <b-form-input v-model="productid" id="title"></b-form-input>
                <b-button variant="dark" class="mt-5" block @click="getProduct">Get</b-button>
            </b-form-group>
            
            </b-form-group>
        </b-card>
    </div>
    <div v-if="title">
        <b-card bg-variant="light">
            <b-form-group
            label-cols-lg="3"
            label="Product Update"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
            >
            <b-form-group
                label="Title:"
                label-for="title"
                label-cols-sm="3"
                label-align-sm="right"
            >
                <b-form-input v-model="title" id="title"></b-form-input>
            </b-form-group>

            <b-form-group
                label="Price:"
                label-for="price"
                label-cols-sm="3"
                label-align-sm="right"
            >
                <b-form-input v-model="price" id="price"></b-form-input>
            </b-form-group>

            <b-form-group
                label="Stock Number:"
                label-for="stock"
                label-cols-sm="3"
                label-align-sm="right"
            >
                <b-form-input v-model="stockNumber" id="stock"></b-form-input>
            </b-form-group>

            <b-form-group
                label="Description:"
                label-for="description"
                label-cols-sm="3"
                label-align-sm="right"
            >
                <b-form-tags input-id="description" v-model="description" placeholder="Add Description"></b-form-tags>
            </b-form-group>

            <b-form-group
                label="Photo"
                label-cols-sm="3"
                label-align-sm="right"
            >
                <b-form-tags input-id="photo" v-model="photo" placeholder="Add Photo Link"></b-form-tags>
            </b-form-group>

            <b-form-group
                label="Main Category:"
                label-for="main-state"
                label-cols-sm="3"
                label-align-sm="right"
            >
                <b-form-select v-model="mainCategory" :options="options"></b-form-select>
            </b-form-group>

            <b-form-group
                label="Sub Category:"
                label-for="sub-state"
                label-cols-sm="3"
                label-align-sm="right"
                class="mb-0"
            >
                <b-form-select v-model="subCategory" :options="subCategoryOptions"></b-form-select>
                <b-button variant="dark" class="mt-5" block :disabled="!allValueValid" @click="updateProduct">Update</b-button>
            </b-form-group>
            
            </b-form-group>
        </b-card>
    </div>
</div>
</template>

<script>
export default {
 data() {
     return {
        productid: null,

        title: null,
        price: null,
        stockNumber: null,
        description: null,
        photo: null,
        mainCategory: null,
        subCategory: null,
        options: [
            { value: null, text: 'Please select a main category', disabled: true },
            { value: 'A', text: 'A' },
            { value: 'B', text: 'B' },
            { value: 'C', text: 'C' }
        ]
     }
 },
 methods: {
    async getProduct() {
        let result = await this.$axios.$get(`http://localhost:8080/api/product/${this.productid}`);
        this.price = result.product.price;
        this.title = result.product.title;
        this.stockNumber = result.product.stockNumber;
        this.description = result.product.description;
        this.photo = result.product.photo;
        this.mainCategory = result.product.mainCategory;
        this.subCategory = result.product.subCategory;
        console.log(result);
    },
    async updateProduct() {
        let updatedProduct = {
            title: this.title,
            price: this.price,
            stockNumber: this.stockNumber,
            description: this.description,
            photo: this.photo,
            mainCategory: this.mainCategory,
            subCategory: this.subCategory
        };
        let result = await this.$axios.$put(`http://localhost:8080/api/product/${this.productid}`, updatedProduct);
        console.log(result)
    }
 },
 computed: {
    subCategoryOptions: function() {
        if (this.mainCategory === 'A') {
            let sub = [
                { value: null, text: 'Please select a sub category', disabled: true },
                { value: '1', text: '1' },
                { value: '2', text: '2' },
                { value: '3', text: '3' }
            ];
            return sub;
        } else if (this.mainCategory === 'B') {
            let sub = [
                { value: null, text: 'Please select a sub category', disabled: true },
                { value: '4', text: '4' },
                { value: '5', text: '5' },
                { value: '6', text: '6' }
            ];
            return sub;
        } else if (this.mainCategory === 'C') {
            let sub = [
                { value: null, text: 'Please select a sub category', disabled: true },
                { value: '7', text: '7' },
                { value: '8', text: '8' },
                { value: '9', text: '9' }
            ];
            return sub;
        } else {
            let sub = [
                { value: null, text: 'Please select a main category first', disabled: true }
            ];
            return sub;
        }
    },
    allValueValid: function () {
        if (this.title &&
            this.price &&
            this.stockNumber &&
            this.description &&
            this.photo &&
            this.mainCategory &&
            this.subCategory) {
            return true;
        } else {
            return false;
        }
    }
},
}
</script>

<style>

</style>