from rest_framework import serializers
from .models import *

class Category_serializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id','name','slug']
        

class Article_serializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()
    category = Category_serializer()
    
    class Meta:
        model = Article
        fields = ['id', 'title', 'slug', 'excerpt', 
            'image', 'author', 'category', 
            'published_at', 'created_at']
        
        
        
class Article_detail_serializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()
    category = Category_serializer()
    
    class Meta:
        model = Article
        fields = '__all__'
        
    