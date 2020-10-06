import dash_html_components as html
# Top Banner
banner = html.Div(
    className="browser-banner column",
    children=[
        html.H2(className="h2-title",
                children="LAX DSI Social Engagement Tracker",
                style={'width': '80%', 'display': 'inline-block'}),

        html.Div(
            style={'width': '20%', 'display': 'inline-block'},
            className="div-logo",
            children=html.Img(
                className="logo", src="../assets/logo.png", style={'height': '20%', 'width': '20%'})
        )
    ]
)
