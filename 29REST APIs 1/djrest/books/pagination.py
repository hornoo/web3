from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination

class PageNationLimit(LimitOffsetPagination):
    default_limit = 10
    max_limit = 10