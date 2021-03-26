$(document).ready(() => {
    $('#initialForm').validate({
        rules: {
            name: {
                required: true,
            },
            surname: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
        },
        messages: {
            name: {
                required: 'NECESITO EL CAMPO NOMBRE',
            },
            surname: {
                required: 'NECESITO EL CAMPO SURNAME',
            },
            email: {
                required: 'NECESITO EL CAMPO EMAIL',
                email: 'ESTO NO ES UN EMAIL',
            },
        },
    });

    $('#submitInitialForm').click(function (event) {
        if ($('#initialForm').valid()) {
            console.log('yes');
        } else {
            console.log('noo');
        }
    });
});
