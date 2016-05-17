// View with central styles
//
exports.InitializeViewModel = function(context, session) {
    return {
        firstName: "Jane",
        lastName: "Smith",
        textStyle: { fontsize: 12, verticalAlignment: "Center" },
        labelStyle: { width: 200, textAlignment: "Right" },
        editStyle: { width: 240 }
    }
}

exports.View =
{
    title: "Hello World 7",
    elements:
    [
        { control: "text", value: "Enter your name:", font: { size: "{textStyle.fontsize}", bold: true } },
        { control: "stackpanel", orientation: "Horizontal", contents: [
            { control: "text", value: "First name:", style: "textStyle, labelStyle" },
            { control: "edit", binding: "firstName", style: "textStyle, editStyle" },
        ] },
        { control: "stackpanel", orientation: "Horizontal", contents: [
            { control: "text", value: "Last name:", style: "textStyle, labelStyle" },
            { control: "edit", binding: "lastName", style: "textStyle, editStyle" },
        ] },
        { control: "text", value: "eval('Hello ' + ({firstName} + ' ' + {lastName}).toUpperCase())", style: "textStyle" },
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