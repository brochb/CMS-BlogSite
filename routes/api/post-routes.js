const router = require('express').Router();
const { Post } = require('../../models');

// The `/api/posts` endpoint

// GET all Posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      // include: [
      //   {
      //     model: Product,
      //     attributes: ['id', 'product_name', 'price', 'stock'],
      //   },
      // ],
    });
    res.status(200).json(postData);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// // GET one Post
// router.get('/:id', async (req, res) => {
//   try {
//     const categoryData = await Category.findByPk(req.params.id, {
//       include: [
//         {
//           model: Product,
//           attributes: ['id', 'product_name', 'price', 'stock'],
//         },
//       ],
//     });
//     if (!categoryData) {
//       res.status(404).json({ message: 'No category found with this id' });
//       return;
//     }
//     res.status(200).json(categoryData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json(error);
//   }
// });

// // POST/Create new Post
// router.post('/', async (req, res) => {
//   try {
//     const categoryData = await Category.create(req.body);
//     res.status(200).json(categoryData);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json(error);
//   }
// });

// // PUT/Update one Post
// router.put('/:id', async (req, res) => {
//   try {
//     const categoryToUpdate = await Category.findByPk(req.params.id);
//     if (!categoryToUpdate) {
//       res.status(404).json({ message: 'No category found with this id' });
//       return;
//     }
//     await categoryToUpdate.update(req.body);
//     res.status(200).json(categoryToUpdate);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json(error);
//   }
// });

// // DEL/Delete one Post
// router.delete('/:id', async (req, res) => {
//   try {
//     const categoryId = req.params.id;
//     const categoryToDelete = await Category.findByPk(categoryId);
//     if (!categoryToDelete) {
//       res.status(404).json({ message: 'No category found with this id' });
//       return;
//     }

//     // Find products associated with the category, and disassociate them from the from the category for safe deletion
//     const associatedProducts = await Product.findAll({
//       where: {
//         category_id: categoryId,
//       },
//     });
//     for (const product of associatedProducts) {
//       product.category_id = null;
//       await product.save();
//     }
//     await categoryToDelete.destroy();
//     res.status(200).json({ message: 'Category and associated products have been deleted' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json(error);
//   }
// });


module.exports = router;
