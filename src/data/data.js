import { Camera, Calendar, Image as ImageIcon, ArrowRight, Star, Aperture } from 'lucide-react';

export const portfolioCategories = [
  { id: 'nature', title: 'Nature', description: 'Capturing the raw beauty of landscapes and wildlife', featured: true },
  { id: 'portrait', title: 'Portraits', description: 'Expressive human portraits in natural settings', featured: true },
  { id: 'architecture', title: 'Architecture', description: 'Modern and classical architectural photography', featured: false },
  { id: 'street', title: 'Street', description: 'Authentic moments from urban environments', featured: true },
  { id: 'wedding', title: 'Weddings', description: 'Timeless moments from your special day', featured: false },
  { id: 'commercial', title: 'Commercial', description: 'Professional product and brand imagery', featured: false },
];

export const galleryImages = [
  // Nature
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Mountain landscape at golden hour', category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80', alt: 'Waterfall in lush forest', category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80', alt: 'Sunrise over mountains', category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80', alt: 'Misty mountain valley', category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80', alt: 'Lake reflection at sunset', category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80', alt: 'Sunlight through forest', category: 'nature' },

  // Portrait
  { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', alt: 'Intimate portrait in soft light', category: 'portrait' },
  { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80', alt: 'Professional headshot', category: 'portrait' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80', alt: 'Fashion portrait', category: 'portrait' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80', alt: 'Character portrait', category: 'portrait' },
  { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80', alt: 'Natural light portrait', category: 'portrait' },
  { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80', alt: 'Studio portrait', category: 'portrait' },

  // Architecture
  { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', alt: 'Modern architectural masterpiece', category: 'architecture' },
  { src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80', alt: 'Historic building details', category: 'architecture' },
  { src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80', alt: 'Contemporary glass building', category: 'architecture' },
  { src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80', alt: 'Abstract architecture', category: 'architecture' },
  { src: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800&q=80', alt: 'Modern building facade', category: 'architecture' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80', alt: 'Interior architecture', category: 'architecture' },

  // Street
  { src: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80', alt: 'Urban street scene', category: 'street' },
  { src: 'https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&q=80', alt: 'City market vibrancy', category: 'street' },
  { src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80', alt: 'Rainy night in Tokyo', category: 'street' },
  { src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80', alt: 'Busy city intersection', category: 'street' },
  { src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80', alt: 'Urban skyline', category: 'street' },
  { src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80', alt: 'New York City street', category: 'street' },

  // Wedding
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', alt: 'Bride and groom embrace', category: 'wedding' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', alt: 'Wedding ceremony moment', category: 'wedding' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', alt: 'Wedding rings detail', category: 'wedding' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', alt: 'Wedding bouquet close-up', category: 'wedding' },
  { src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80', alt: 'First dance moment', category: 'wedding' },
  { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80', alt: 'Wedding venue decoration', category: 'wedding' },

  // Commercial
  { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80', alt: 'Product photography', category: 'commercial' },
  { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80', alt: 'Headphones product shot', category: 'commercial' },
  { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80', alt: 'Red Nike shoe product', category: 'commercial' },
  { src: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80', alt: 'Polaroid camera product', category: 'commercial' },
  { src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80', alt: 'Sunglasses product', category: 'commercial' },
  { src: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80', alt: 'Luxury watch product', category: 'commercial' },
];

export const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Creative Director',
    text: 'Working with this photographer transformed our entire brand identity. The attention to detail and artistic vision exceeded all expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Editor-in-Chief',
    text: 'A true professional who brings both technical excellence and creative artistry. Every shoot delivers consistently stunning results.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Bride',
    text: 'Our wedding photos are absolute treasures. Every emotion, every moment was captured with such beauty and authenticity.',
    rating: 5,
  },
];

export const services = [
  {
    icon: Aperture,
    title: 'Portrait Photography',
    description: 'Professional portraits that capture personality and essence. Perfect for individuals, couples, and families.',
    price: 'From $350',
    features: ['Studio or on-location', 'Professional retouching', 'Digital gallery included'],
  },
  {
    icon: Calendar,
    title: 'Wedding Photography',
    description: 'Comprehensive coverage of your special day with artistic storytelling and candid moments.',
    price: 'From $2,500',
    features: ['Full day coverage', 'Second photographer', 'Luxury album included'],
  },
  {
    icon: ImageIcon,
    title: 'Commercial Photography',
    description: 'High-impact product and brand imagery that elevates your marketing and drives engagement.',
    price: 'From $800',
    features: ['Product styling', 'Multiple angles', 'Commercial licensing'],
  },
  {
    icon: Camera,
    title: 'Event Coverage',
    description: 'Documentary-style photography for corporate events, conferences, and special occasions.',
    price: 'From $500',
    features: ['Real-time editing', 'Quick turnaround', 'Event highlights'],
  },
  {
    icon: Star,
    title: 'Fine Art Prints',
    description: 'Limited edition artistic prints for homes, offices, and galleries. Museum-quality materials.',
    price: 'From $250',
    features: ['Archival quality', 'Certificate of authenticity', 'Custom framing'],
  },
  {
    icon: ArrowRight,
    title: 'Photo Editing',
    description: 'Professional retouching and editing services to enhance your existing photographs.',
    price: '$75/hr',
    features: ['Color correction', 'Advanced retouching', 'Format conversion'],
  },
];

export const navItems = ['home', 'portfolio', 'about', 'services', 'contact'];

export const stats = [
  { value: '15+', label: 'Years', description: 'Professional photography' },
  { value: '500+', label: 'Clients', description: 'Worldwide' },
  { value: '20K+', label: 'Photos', description: 'High resolution' },
  { value: '50+', label: 'Awards', description: 'International recognition' },
];
