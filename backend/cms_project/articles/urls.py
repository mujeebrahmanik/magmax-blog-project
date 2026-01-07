from django.urls import path
from .views import *

urlpatterns = [
    path('category/',Category_view.as_view(),name='category'),
    path('article/',Article_view.as_view(),name='article'),
    path('article/<slug:slug>/',Article__detail_view.as_view(),name='article_detail'),

]