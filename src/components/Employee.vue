<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <b-card header="Employee Detail" class="mx-auto"> 
                    <div v-if="loading" class="text-center">Data are still loading...</div>
                    <div v-else>
                        <div v-if="employee">
                            <b-card-text>
                                <p>
                                    <span class="font-weight-bold">Name: </span> {{employee.name}} 
                                </p>
                                <p>
                                    <span class="font-weight-bold">Email: </span> {{employee.email}}
                                </p>
                                <p>
                                    <span class="font-weight-bold">Phone Number: </span> {{employee.phone_no}}
                                </p>
                                <p>
                                    <span class="font-weight-bold">Deaprtment Name: </span> {{employee.department.name}}
                                </p>
                                <p>
                                    <span class="font-weight-bold">Designation Name: </span> {{employee.designation.name}}
                                </p>
                            </b-card-text>
                            <div class="mt-3 text-right">
                                <router-link :to="{ name: 'home'}"> &#171; Back</router-link>
                            </div>
                        </div>
                        <div v-else class="text-center">
                            There is no employee data with the given ID!
                        </div>
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            employee:null,
            loading:false,
        };
    },
    created() {
        this.loading= true;
        this.$http.get(`/employees/${this.$route.params.id}`)
        .then(response => {
            this.employee = response.data.data;
            this.loading=false;
        })
       .catch(function (error) {
             console.log(error);
        });
    }
};
</script>
<style scoped>
    .card-header {
        background-color: #337ab7;
        color: #fff;
        font-weight: bold;
    }
    .card {
        max-width: 40rem;
    }
</style>