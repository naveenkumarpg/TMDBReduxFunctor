module.exports = function compose(...fns) {
fns.reduceRight((prevFn, nextFn) =>
        (...args) => nextFn(prevFn(...args)),
        value => value
    );
}

