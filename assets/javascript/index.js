$(document).ready(function () {

    // var ctx = document.getElementById('visaoGeralChart').getContext('2d');
    var ctx = document.getElementById('visaoGeralChart').getContext('2d');

    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Depósitos',
                'Depositantes',
                'FTD’s'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 200, 47],
                backgroundColor: [
                    '#DE8734',
                    '#B9B9B9',
                    '#4D4D4D'
                ],
                hoverOffset: 4
            }]
        }
    });

    var ctxdois = document.getElementById('visaoGeralChartdois').getContext('2d');

    var chart = new Chart(ctxdois, {
        type: 'doughnut',
        data: {
            labels: [
                'Depósitos',
                'Depositantes',
                'FTD’s'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 200, 47],
                backgroundColor: [
                    '#DE8734',
                    '#B9B9B9',
                    '#4D4D4D'
                ],
                hoverOffset: 4
            }]
        }
    });

    var graficoCrescimentoChart = document.getElementById('graficoCrescimentoChart').getContext('2d');

    var labels = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET']; // Definir os rótulos

    var chart = new Chart(graficoCrescimentoChart, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '', // Deixe o label vazio se quiser esconder o texto da legenda
                data: [30000, 60000, 40000, 100000, 40000, 80000, 40000, 60000, 70000], // Valores numéricos
                fill: false,
                borderColor: '#DE8734',
                tension: 0.2
            }]
        },
        options: {
            legend: {
                display: false // Esconder a legenda
            },
            scales: {
                yAxes: [{
                    ticks: {
                        // Formatar os valores do eixo Y com "K"
                        callback: function (value, index, values) {
                            return value / 1000 + 'K'; // Exibe como "K"
                        }
                    }
                }]
            }
        }
    });



    var graficoCrescimentoChartdois = document.getElementById('graficoCrescimentoChartdois').getContext('2d');

    var labels = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET']; // Definir os rótulos

    var chart = new Chart(graficoCrescimentoChartdois, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '', // Deixe o label vazio se quiser esconder o texto da legenda
                data: [30000, 60000, 40000, 100000, 40000, 80000, 40000, 60000, 70000], // Valores numéricos
                fill: false,
                borderColor: '#DE8734',
                tension: 0.2
            }]
        },
        options: {
            legend: {
                display: false // Esconder a legenda
            },
            scales: {
                yAxes: [{
                    ticks: {
                        // Formatar os valores do eixo Y com "K"
                        callback: function (value, index, values) {
                            return value / 1000 + 'K'; // Exibe como "K"
                        }
                    }
                }]
            }
        }
    });


    var graficoCrescimentoChartum = document.getElementById('graficoCrescimentoChartum').getContext('2d');

    var labels = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET']; // Definir os rótulos

    var chart = new Chart(graficoCrescimentoChartum, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '', // Deixe o label vazio se quiser esconder o texto da legenda
                data: [30000, 60000, 40000, 100000, 40000, 80000, 40000, 60000, 70000], // Valores numéricos
                fill: false,
                borderColor: '#DE8734',
                tension: 0.2
            }]
        },
        options: {
            legend: {
                display: false // Esconder a legenda
            },
            scales: {
                yAxes: [{
                    ticks: {
                        // Formatar os valores do eixo Y com "K"
                        callback: function (value, index, values) {
                            return value / 1000 + 'K'; // Exibe como "K"
                        }
                    }
                }]
            }
        }
    });


});

$('button.togle').on('click', function () {
    console.log('test');
    $('#sidebar').toggleClass('active');
});


$(document).ready(function () {
    checkWidth();

    $(window).resize(function () {
        checkWidth();
    });

    function checkWidth() {
        var windowWidth = $(window).width();

        if (windowWidth <= 1366) {
            console.log("Tela pequena (mobile)");
            $('#sidebarCollapse .img-auto').attr('src', './src/img/icons/sidebar/sidebar_sm.svg');
            $('.tableDesk').hide();
            $('.tableMobile').show();



        } else {
            console.log("Tela grande (desktop)");
            $('#sidebarCollapse .img-auto').attr('src', './src/img/icons/btn-reduce.svg');
            $('.tableDesk').show();
            $('.tableMobile').hide();


            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');



                // if ($('#sidebar').hasClass('active')) {
                $('.iconDesactive').toggleClass('d-none');
                $('.iconActive').toggleClass('d-none');

                $('.sidebar-header div.img-logo').toggleClass('col-8');
                $('.sidebar-header div.img-logo').toggleClass('mb-3');
                $('.sidebar-header div.btn-sidebar').toggleClass('col-4');
                // }
            });
        }


        if (windowWidth <= 1024) {

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        }

        if (windowWidth <= 768) { $('img.iconDesactive').attr('src', './src/img/logo/ATLAS icone 2.svg'); }
    }
});

var options = {
    chart: {
        type: 'donut',
        width: '100%'
    },
    series: [45, 30, 25], // Percentuais de Depósitos, Depositantes, e FTD's
    colors: ['#F19B1A', '#A6A6A6', '#353535'], // Cores das fatias
    labels: ['Depósitos', 'Depositantes', 'FTD\'s'],
    legend: {
        show: false // Desabilita a legenda padrão (será customizada fora do gráfico)
    },
    dataLabels: {
        enabled: false // Remove as labels dentro da rosca
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: '70%',
                labels: {
                    show: true,
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            return 'R$ 24.500,20'; // Valor total personalizado
                        },
                        style: {
                            color: '#F4F4F4',
                            fontSize: '16px'
                        }
                    }
                }
            }
        }
    },
    stroke: {
        show: false // Remove a borda branca
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
