export default function (allowedValues) {
    return function (props, propName, componentName) {
        if (!props[propName].includes(propValue)) {
            return new Error(
                'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    }
}