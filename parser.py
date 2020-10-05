from abc import ABC, abstractmethod
from typing import List
import pandas as pd
from configs import BASE_GITHUB_URL, BASE_TWITTER_URL


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


class TwitterParser(Parser):
    def connect(self):
        pass

    def query_page(self, user_url: str) -> str:
        pass

    def obtain_info(self, html_str: str) -> str:
        pass

    def run(self) -> pd.DataFrame:
        pass


class LinkedInParser(Parser):
    def connect(self):
        pass

    def query_page(self, user_url: str) -> str:
        pass

    def obtain_info(self, html_str: str) -> str:
        pass

    def run(self) -> pd.DataFrame:
        pass


class GitHubParser(Parser):
    def connect(self):
        pass

    def query_page(self, user_url: str) -> str:
        pass

    def obtain_info(self, html_str: str) -> str:
        pass

    def run(self) -> pd.DataFrame:
        pass
