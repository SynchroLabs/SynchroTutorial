// View with JavaScript value conversion
//
exports.InitializeViewModel = function(context, session) {
    return {
        firstName: "Jane",
        lastName: "Smith",
    }
}

exports.View =
{
    title: "Hello World 5",
    elements:
    [
        { control: "edit", binding: "firstName", placeholder: "first name" },
        { control: "edit", binding: "lastName", placeholder: "last name" },
        { control: "text", value: "eval('Hello ' + ({firstName} + ' ' + {lastName}).toUpperCase())" },
        { control: "button", caption: "Submit", binding: "onSubmit", enabled: "eval({firstName} && {lastName})" },
    ]
}

exports.Commands =
{
    onSubmit: function(context, session, viewModel)
    {
        Synchro.showMessage(context, { 
            title: "Hello World", 
            message: "User name: " + viewModel.firstName + " " + viewModel.lastName 
        });
    }
}