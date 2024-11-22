import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Machine Learning in Healthcare',
    excerpt: 'Exploring how machine learning is revolutionizing healthcare through predictive analytics and diagnosis.',
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Machine Learning'
  },
  {
    title: 'Data Science Best Practices',
    excerpt: 'Key principles and best practices for building robust and maintainable data science projects.',
    date: 'Mar 10, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Data Science'
  },
  {
    title: 'Power BI Dashboard Design',
    excerpt: 'Tips and techniques for creating effective and visually appealing Power BI dashboards.',
    date: 'Mar 5, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Data Visualization'
  }
];

const BlogCard = ({ post, index }: { post: typeof posts[0], index: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <span className="absolute bottom-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
          {post.category}
        </span>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-400 mb-4">{post.excerpt}</p>
        
        <a
          href="#"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.article>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Articles</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;