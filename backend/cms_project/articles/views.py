from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import generics,filters
from django_filters.rest_framework import DjangoFilterBackend

class Category_view(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = Category_serializer
    lookup_field = 'slug'
    
    


class Article_view(generics.ListAPIView):
    queryset = Article.objects.filter(status='published')
    serializer_class = Article_serializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    search_fields = ['title','content','excerpt']
    lookup_field = 'slug'
    
    
class Article__detail_view(generics.RetrieveAPIView):
    queryset = Article.objects.filter(status='published')
    serializer_class = Article_detail_serializer
    lookup_field = 'slug'