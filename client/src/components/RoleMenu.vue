<template>
    <div class="rolemenu">
        <div class="ui selection dropdown">
            <input type="hidden" name="gender">
            <div class="default text">Role</div>
            <i class="dropdown icon"></i>
            <div class="menu">
                <div class="item" data-value="1">Male</div>
                <div class="item" data-value="2">Female</div>
                <div class="item" data-value="3">Other</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'todolist',
        data() {
            return {
                msg: 'hello',
                todolist: [{
                    id: 1,
                    title: 'End of this week',
                    endDate: new Date('2017-06-17')
                }, {
                    id: 2,
                    title: 'End of this month',
                    endDate: new Date('2017-06-30')
                }, {
                    id: 3,
                    title: 'Spring Festival 2018',
                    endDate: new Date('2018-02-15')
                }, {
                    id: 4,
                    title: 'GameOfThrones Season 7',
                    endDate: new Date('2017-07-16')
                }]
            }
        },
        methods: {
            /* Print days left to the given date */
            printDaysLeft: function(date) {
                // The number of milliseconds in one day
                var ONE_DAY = 1000 * 60 * 60 * 24;

                var now = new Date();
                var left = date - now;
                return Math.round(left / ONE_DAY);
            }
        },
        mounted() {
            $('.ui.dropdown').dropdown();
        }
    }
</script>

<style scoped>
    .todolist {
        color: black
    }
</style>