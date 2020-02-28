class Layout {
    constructor() {
        /*removeIf(production)*/ objDebug.debugMethod(this, objDebug.getMethodName()); /*endRemoveIf(production)*/
        this.$body = document.querySelector('body');
        // this.$window = document.querySelector('window');

        this.breakPointExtraSmall = 0;
        this.breakPointSmall = 576;
        this.breakPointMedium = 768;
        this.breakPointBig = 992;
        this.breakPointExtraBig = 1200;
    }
    
    build() {
        /*removeIf(production)*/ objDebug.debugMethod(this, objDebug.getMethodName()); /*endRemoveIf(production)*/
        this.buildToggle();
    }

    buildSpinner(style) {
        /*removeIf(production)*/ objDebug.debugMethod(this, objDebug.getMethodName(), style); /*endRemoveIf(production)*/
        let spinner = '';

        spinner += '<div class="row text-center">';
        spinner += '    <div class="col-es-12">';
        spinner += '        <span class="fa fa-circle-o-notch fa-spin fa-2x color-' + style + '"></span>';
        spinner += '    </div>';
        spinner += '</div>';

        return spinner;
    }

    buildToggle() {
        /*removeIf(production)*/ objDebug.debugMethod(this, objDebug.getMethodName()); /*endRemoveIf(production)*/
        let element = document.querySelectorAll('.bt-toggle');

        Array.prototype.forEach.call(element, function (el, i) {
            el.onclick = function () {
                let $ul1 = el.parentNode.querySelector('nav > ul');
                let $ulAll = el.parentNode.querySelector('nav ul');
                let classDisplay = 'mobile-show';

                if ($ul1.classList.contains(classDisplay)) {
                    $ul1.classList.remove(classDisplay);
                    $ulAll.classList.remove(classDisplay);
                } else {
                    $ul1.classList.add(classDisplay);
                }
            }
        });
    }
}