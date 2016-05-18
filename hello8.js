// View that receives data from parent, returns edits to parent
//
// Note: This view is navigated to from the list3 tutorial view (not from the main view)
//
exports.InitializeViewModel = function(context, session, params, state) {
    return {
        firstName: params.person.first,
        lastName: params.person.last,
        index: params.index,
        textStyle: { fontsize: 12, verticalAlignment: "Center" },
        labelStyle: { width: 200, textAlignment: "Right" },
        editStyle: { width: 240 }
    }
}

exports.View =
{
    title: "Hello World 8",
    elements:
    [
        { control: "text", value: "Enter name:", font: { size: "{textStyle.fontsize}", bold: true } },
        { control: "stackpanel", orientation: "Horizontal", contents: [
            { control: "text", value: "First name:", style: "textStyle, labelStyle" },
            { control: "edit", binding: "firstName", style: "textStyle, editStyle" },
        ] },
        { control: "stackpanel", orientation: "Horizontal", contents: [
            { control: "text", value: "Last name:", style: "textStyle, labelStyle" },
            { control: "edit", binding: "lastName", style: "textStyle, editStyle" },
        ] },
        { control: "button", caption: "Submit", binding: "onSubmit", enabled: "eval({firstName} && {lastName})" },
    ]
}

exports.Commands =
{
    onSubmit: function(context, session, viewModel)
    {
        // Update and return
        session.updatedPerson = { index: viewModel.index, person: { first: viewModel.firstName, last: viewModel.lastName }};
        Synchro.pop(context);
    }
}