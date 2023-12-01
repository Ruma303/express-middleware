
    module.exports =
    class CustomErrorHandler extends Error {
        constructor(status, message, name = 'CustomError') {
            super(message);
            this.status = status;
            this.name = name;
            this.handle();
        }
        handle() {
            switch (this.status) {
                case 404: this.notFound(); break;
                case 500: this.internalServerError(); break;
                default: this.defaultError(); break;
            }
        }
        defaultError() {
            this.status = 500;
            this.message = this.message || 'Errore interno';
        }
        notFound() {this.message = this.message || 'Risorsa non trovata';}
        internalServerError() {this.message = this.message || 'Errore nel server';}
    }

