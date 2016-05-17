// Complex View with container controls and styling
//
exports.InitializeViewModel = function(context, session) {
    return {
        firstName: "Jane",
        lastName: "Smith",
    }
}

exports.View =
{
    title: "Hello World 6",
    elements:
    [
        { control: "text", value: "Enter your name:", font: { bold: true } },
        { control: "stackpanel", orientation: "Horizontal", contents: [
            { control: "text", value: "First name:", verticalAlignment: "Center", width: 200 },
            { control: "edit", binding: "firstName", verticalAlignment: "Center", width: 240 },
        ] },
        { control: "stackpanel", orientation: "Horizontal", contents: [
            { control: "text", value: "Last name:", verticalAlignment: "Center", width: 200 },
            { control: "edit", binding: "lastName", verticalAlignment: "Center", width: 240 },
        ] },
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