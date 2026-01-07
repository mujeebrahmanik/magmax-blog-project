from django.db import models
from django.utils.text import slugify
from cms.models import CMSPlugin
from django.contrib.auth.models import User

# Create your models here.

class Category(models.Model):
    
    name = models.CharField(max_length=100)
    slug = models.SlugField(blank=True,null=True,unique=True)
    
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
    class Meta:
        verbose_name_plural = 'Categories'
        
        
class Article(models.Model):
    
    STATUS_CHOICES=(
        ('draft','Draft'),
        ('published','Published')
    )
    
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True,blank=True)
    content = models.TextField()
    excerpt = models.CharField(max_length=300,blank=True)
    image = models.ImageField(upload_to='images/',blank=True,null=True)
    author = models.ForeignKey(User,on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published_at = models.DateTimeField(null=True, blank=True,auto_now_add=True)
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
        
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-published_at']




