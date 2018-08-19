var AppErrorhandler = /** @class */ (function () {
    function AppErrorhandler() {
    }
    AppErrorhandler.prototype.handleError = function (error) {
        alert('An unexpected error occurred.');
        console.log(error);
    };
    return AppErrorhandler;
}());
export { AppErrorhandler };
//# sourceMappingURL=app-error-handler.js.map