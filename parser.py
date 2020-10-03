from abc import ABC, abstractmethod
from typing import List
from bs4 import BeautifulSoup
import requests
import pandas as pd


class Parser():
    def __init__(self, platform: str, usernames: List[str]) -> None:
        self.platform = platform
        self.usernames = usernames

    @abstractmethod
    def connect(self) -> bool:
        pass

    @abstractmethod
    def query_page(self, user_url: str) -> str:
        pass

    @abstractmethod
    def obtain_info(self, html_str: str) -> bool:
        pass

    @abstractmethod
    def run(self) -> pd.DataFrame:
        pass


def TwitterParser(Parser):
    def connect(self):
        pass

    def query_page(self, user_url: str) -> str:
        pass

    def obtain_info(self, html_str: str) -> str:
        pass

    def run(self) -> pd.DataFrame:
        pass

def LinkedInParser(Parser):
    def connect(self):
        pass

    def query_page(self, user_url: str) -> str:
        pass

    def obtain_info(self, html_str: str) -> str:
        pass

    def run(self) -> pd.DataFrame:
        pass

def GitHubParser(Parser):
    def connect(self):
        pass

    def query_page(self, user_url: str) -> str:
        pass

    def obtain_info(self, html_str: str) -> str:
        pass

    def run(self) -> pd.DataFrame:
        pass