<template>
<div>
    <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand>Shop</b-navbar-brand>

        <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item @click="$bvModal.show('bv-modal-example')">Login</b-nav-item>
        </b-navbar-nav>
        <div>
            <b-modal id="bv-modal-example" hide-footer>
                <template #modal-title>
                Login
                </template>
                <div class="d-block text-center">
                    <div>
                        <b-tabs content-class="mt-3" align="center">
                            <b-tab title="Sign In" active>
                                <div>
                                    <b-form-group
                                    id="fieldset-1"
                                    label="Enter your email"
                                    label-for="input-1"
                                    >
                                    <b-form-input id="input-1" v-model="email" type="email" trim></b-form-input>
                                    </b-form-group>

                                    <b-form-group
                                    id="fieldset-2"
                                    label="Enter your password"
                                    label-for="input-2"
                                    >
                                    <b-form-input id="input-2" v-model="password" type="password" trim></b-form-input>
                                    </b-form-group>
                                    <b-button variant="outline-primary" block>Sign In</b-button>
                                </div>
                            </b-tab>
                            <b-tab title="Sign Up">
                                <div>
                                    <b-form-group
                                    id="fieldset-1"
                                    label="Enter your name"
                                    label-for="input-1"
                                    >
                                    <b-form-input id="input-1" v-model="email" type="text" trim></b-form-input>
                                    </b-form-group>

                                    <b-form-group
                                    id="fieldset-2"
                                    label="Enter your email"
                                    label-for="input-2"
                                    >
                                    <b-form-input id="input-2" v-model="email" type="email" trim></b-form-input>
                                    </b-form-group>

                                    <b-form-group
                                    id="fieldset-3"
                                    label="Enter your password"
                                    label-for="input-3"
                                    >
                                    <b-form-input id="input-3" v-model="password" type="password" trim></b-form-input>
                                    </b-form-group>

                                    <b-form-group
                                    id="fieldset-4"
                                    label="Enter your address"
                                    label-for="input-4"
                                    >
                                    <b-form-input id="input-4" v-model="email" type="text" trim></b-form-input>
                                    </b-form-group>

                                    <b-form-group
                                    id="fieldset-5"
                                    label="Enter your phone"
                                    label-for="input-5"
                                    >
                                    <b-form-input id="input-5" v-model="email" type="text" trim></b-form-input> 
                                    </b-form-group>
                                    <b-button variant="outline-primary" block>Sign Up</b-button>
                                </div>
                            </b-tab>                        
                        </b-tabs>
                    </div>
                </div>
                <!--<b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button> -->
            </b-modal>
        </div>
    </b-navbar>
</div>
</template>

<script>

</script>

<style scoped>

</style>