import dash
import dash_core_components as dcc
import dash_html_components as html
import plotly.graph_objs as go
import pandas as pd
import pathlib
from dash.dependencies import Input, Output, State
import plotly.express as px
from parser import *
from elements.banner import banner
from elements.administration_tab import administration_tab
from elements.overview_tab import overview_tab
from datetime import date
import dash_bootstrap_components as dbc
from elements.tab_styles import tab_selected_style, tab_style

app = dash.Dash(
    __name__,
    meta_tags=[{"name": "viewport", "content": "width=device-width"}],
    external_stylesheets=[dbc.themes.DARKLY]
)

# App Layout
app.layout = html.Div(
    children=[
        # Top Banner
        banner,
        # Body of the App
        html.Div([
            dcc.Tabs(id='tabs', value='overview',
                     children=[
                         dcc.Tab(label='Overview {}'.format(date.today().strftime("%A %d. %B %Y")),
                                 value='overview', style=tab_style, selected_style=tab_selected_style),
                         dcc.Tab(label='Administration',
                                 value='administration', style=tab_style, selected_style=tab_selected_style),
                     ]),
            html.Div(id='tabs-content', children=overview_tab),
        ]),
    ]
)


# Callback to change between tabs
@app.callback(Output('tabs-content', 'children'),
              [Input('tabs', 'value')])
def render_content(tab):
    if tab == 'overview':
        return overview_tab
    elif tab == 'administration':
        return administration_tab


if __name__ == "__main__":
    app.run_server(debug=True, port=7790, host="0.0.0.0")
