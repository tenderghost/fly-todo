<template>
    <div class="todolist">
        <table class="ui selectable compact inverted table">
            <thead>
                <tr><th colspan="3">Fly todolist</th></tr>
                <tr>
                    <th>序号</th>
                    <th>工作项</th>
                    <th class="right aligned">剩余天数</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='todo in todolist'>
                    <td>{{ todo.id }}</td>
                    <td>{{ todo.title }}</td>
                    <td class="right aligned">{{ printDaysLeft(todo.endDate) }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3">
                        <div class="ui huge basic icon buttons">
                            <button class="ui button"><i class="file icon"></i></button>
                            <button class="ui button"><i class="save icon"></i></button>
                            <button class="ui button"><i class="upload icon"></i></button>
                            <button class="ui button" v-on:click='sayHello()'><i class="download icon"></i></button>
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>
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
            },
            sayHello: function(a, b, c) {
                debugger;
                alert('Hello, World!');
            }
        }
    }
</script>

<style scoped>
    .todolist {
        color: black
    }
</style>