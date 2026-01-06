from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Category)
class Category_admin(admin.ModelAdmin):
    list_display = ['name','slug']
    prepopulated_fields = {'slug' : ('name',)}
    
    
@admin.register(Article)
class Article_admin(admin.ModelAdmin):
    list_display = ['title','author','category','status','published_at']
    list_filter = ['status','category','created_at']
    search_fields = ['title','content']
    prepopulated_fields = {'slug':('title',)}
    date_hierarchy = 'published_at'
    