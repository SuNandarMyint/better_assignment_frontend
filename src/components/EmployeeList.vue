<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <b-card header="Employee List"> 
                    <div v-if="loading" class="text-center">Data are still loading...</div>
                    <div v-else>
                        <div v-if="items">
                            <b-table
                            striped
                            hover
                            :items="items"
                            responsive
                            :per-page="perPage"
                            :current-page="currentPage"
                            @row-clicked="detail">
                            </b-table>
                            <div class="mt-3">
                                <b-pagination class="custom-pagination"
                                v-model="currentPage"
                                :total-rows="rows"
                                :per-page="perPage"
                                aria-controls="my-table"
                                align="right">
                                </b-pagination>
                            </div>
                        </div>
                        <div v-else class="text-center">
                            There is no employee data!
                        </div>
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
const PER_PAGE_NUMBER = 5;
const CURRENT_PAGE_NUMBER = 1;
export default {
    data() {
        return {
            perPage: PER_PAGE_NUMBER,
            currentPage: CURRENT_PAGE_NUMBER,
            items: null,
            loading: false
        };
    },
    created() {
        this.loading = true;
        this.$http.get('/employees')
        .then(response => {
            if(response.data.data.length>0) {
                this.items = response.data.data;
            }
            this.loading=false;
        })
       .catch(function (error) {
             console.log(error);
        });
    },
    computed: {
        rows() {
            return this.items.length;
        },
    },
    methods: {
        detail(employee) {
            this.$router.push({ name: "employee", params: { id: employee.id } });
        },
    }
};
</script>
<style scoped>
    .card-header {
        background-color: #337ab7;
        color: #fff;
        font-weight: bold;
    }
</style>