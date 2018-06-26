// lazyload config
var MODULE_CONFIG = {
    chat:           [
                      '../assets/libs/list.js/dist/list.js',
                      '../assets/libs/notie/dist/notie.min.js',
                      '../scripts/plugins/notie.js',
                      '../scripts/app/chat.js'
                    ],
    mail:           [
                      '../assets/libs/list.js/dist/list.js',
                      '../assets/libs/notie/dist/notie.min.js',
                      '../scripts/plugins/notie.js',
                      '../scripts/app/mail.js'
                    ],
    user:           [
                      '../assets/libs/list.js/dist/list.js',
                      '../assets/libs/notie/dist/notie.min.js',
                      '../scripts/plugins/notie.js',
                      '../scripts/app/user.js'
                    ],
    screenfull:     [
                      '../assets/libs/screenfull/dist/screenfull.js',
                      '../scripts/plugins/screenfull.js'
                    ],
    jscroll:        [
                      '../assets/libs/jscroll/jquery.jscroll.min.js'
                    ],
    stick_in_parent:[
                      '../assets/libs/sticky-kit/jquery.sticky-kit.min.js'
                    ],
    scrollreveal:   [
                      '../assets/libs/scrollreveal/dist/scrollreveal.min.js',
                      '../scripts/plugins/jquery.scrollreveal.js'
                    ],
    owlCarousel:    [
                      '../assets/libs/owl.carousel/dist/assets/owl.carousel.min.css',
                      '../assets/libs/owl.carousel/dist/assets/owl.theme.css',
                      '../assets/libs/owl.carousel/dist/owl.carousel.min.js'
                    ],
    html5sortable:  [
                      '../assets/libs/html5sortable/dist/html.sortable.min.js',
                      '../scripts/plugins/jquery.html5sortable.js',
                      '../scripts/plugins/sortable.js'
                    ],
    easyPieChart:   [
                      '../assets/libs/easy-pie-chart/dist/jquery.easypiechart.min.js' 
                    ],
    peity:          [
                      '../assets/libs/peity/jquery.peity.js',
                      '../scripts/plugins/jquery.peity.tooltip.js',
                    ],
    chart:          [
                      '../assets/libs/moment/min/moment-with-locales.min.js',
                      '../assets/libs/chart.js/dist/Chart.min.js',
                      '../scripts/plugins/jquery.chart.js',
                      '../scripts/plugins/chartjs.js'
                    ],
    dataTable:      [
                      '../assets/libs/datatables/media/js/jquery.dataTables.min.js',
                      '../assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.js',
                      '../assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.css',
                      '../scripts/plugins/datatable.js'
                    ],
    bootstrapTable: [
                      '../assets/libs/bootstrap-table/dist/bootstrap-table.min.css',
                      '../assets/libs/bootstrap-table/dist/bootstrap-table.min.js',
                      '../assets/libs/bootstrap-table/dist/extensions/export/bootstrap-table-export.min.js',
                      '../assets/libs/bootstrap-table/dist/extensions/mobile/bootstrap-table-mobile.min.js',
                      '../scripts/plugins/tableExport.min.js',
                      '../scripts/plugins/bootstrap-table.js'
                    ],
    bootstrapWizard:[
                      '../assets/libs/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js'
                    ],
    dropzone:       [
                      '../assets/libs/dropzone/dist/min/dropzone.min.js',
                      '../assets/libs/dropzone/dist/min/dropzone.min.css'
                    ],
    datetimepicker: [
                      '../assets/libs/tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css',
                      '../assets/libs/moment/min/moment-with-locales.min.js',
                      '../assets/libs/tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.min.js',
                      '../scripts/plugins/datetimepicker.js'
                    ],
    datepicker:     [
                      "../assets/libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
                      "../assets/libs/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css",
                    ],
    fullCalendar:   [
                      '../assets/libs/moment/min/moment-with-locales.min.js',
                      '../assets/libs/fullcalendar/dist/fullcalendar.min.js',
                      '../assets/libs/fullcalendar/dist/fullcalendar.min.css',
                      '../scripts/plugins/fullcalendar.js'
                    ],
    parsley:        [
                      '../assets/libs/parsleyjs/dist/parsley.min.js'
                    ],
    select2:        [
                      '../assets/libs/select2/dist/css/select2.min.css',
                      '../assets/libs/select2/dist/js/select2.min.js',
                      '../scripts/plugins/select2.js'
                    ],
    summernote:     [
                      '../assets/libs/summernote/dist/summernote.css',
                      '../assets/libs/summernote/dist/summernote-bs4.css',
                      '../assets/libs/summernote/dist/summernote.min.js',
                      '../assets/libs/summernote/dist/summernote-bs4.min.js'
                    ],
    vectorMap:      [
                      '../assets/libs/jqvmap/dist/jqvmap.min.css',
                      '../assets/libs/jqvmap/dist/jquery.vmap.js',
                      '../assets/libs/jqvmap/dist/maps/jquery.vmap.world.js',
                      '../assets/libs/jqvmap/dist/maps/jquery.vmap.usa.js',
                      '../assets/libs/jqvmap/dist/maps/jquery.vmap.france.js',
                      '../scripts/plugins/jqvmap.js'
                    ],
    waves:          [
                      '../assets/libs/node-waves/dist/waves.min.css',
                      '../assets/libs/node-waves/dist/waves.min.js',
                      '../scripts/plugins/waves.js'
                    ]
  };

var MODULE_OPTION_CONFIG = {
  parsley: {
    errorClass: 'is-invalid',
    successClass: 'is-valid',
    errorsWrapper: '<ul class="list-unstyled text-sm mt-1 text-muted"></ul>'
  }
}
