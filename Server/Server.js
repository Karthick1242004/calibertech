const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongoURI = process.env.MONGO_URL;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  businessType: String,
  businessDescription: String,
  projectDescription: String,
  websiteType: String,
  websiteKind: String,
  backend: String,
  budget: Number,
});
const EnquiryModel = mongoose.model('user', enquirySchema);
app.post('/send-enquiry', async (req, res) => {
  try {
    const { name, email, phone, businessType, business, project, webkind, webtype, backend, budget } = req.body;
    const enquiry = new EnquiryModel({
      name,
      email,
      phoneNumber: phone,
      businessType,
      businessDescription: business,
      projectDescription: project,
      websiteType: webtype,
      websiteKind: webkind,
      backend,
      budget,
    });
    await enquiry.save();
    return res.status(200).json({ message: 'Enquiry sent successfully' });
  } catch (error) {
    console.error('Error sending enquiry:', error);
    return res.status(500).json({ error: 'An error occurred while sending the enquiry' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello, this is the root path!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
